{
  description = "Svelte-powered site";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    bp.url = "github:serokell/nix-npm-buildpackage";
    bp.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { self, nixpkgs, flake-utils, bp, ... }:
    (flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs { inherit system; };
          node = pkgs.nodejs-18_x;
          yarn18 = pkgs.yarn.overrideAttrs (old: { buildInputs = [ node ]; });
          package = bp.legacyPackages.x86_64-linux.buildYarnPackage {
            src = ./.;
            installPhase = ''
              yarn build:flake
							${pkgs.python3}/bin/python3 $src/replace.py
              rm -rf node_modules/
              cat <<-END >> .yarnrc
                yarn-offline-mirror "$PWD/yarn-cache"
                nodedir "${node}"
              END
              yarn install --production --cache-folder "$PWD/yarn-cache" || true
              cp -r build $out/
              cp -r node_modules $out/
              cp package.json $out/
              cp yarn.lock $out/
              mkdir $out/bin
              cat <<EOF > $out/bin/firesquare-ru
                #!${pkgs.bash}/bin/bash
                ${node}/bin/node $out/index.js
              EOF
              chmod u+x $out/bin/firesquare-ru
            '';
          };
        in
        {
          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              node
              yarn18
            ];
          };

          packages.default = package;
        }
      )) // {
      nixosModules.default = ({ config, lib, pkgs, ... }:
        with lib; let
          cfg = config.services.firesquare-ru;
        in
        {
          options.services.firesquare-ru = {
            enable = mkEnableOption "Enable firesquare.ru website";

            host = mkOption {
              type = types.str;
              default = "0.0.0.0";
              description = "Address to listen";
            };

            port = mkOption {
              type = types.port;
              default = 3000;
              description = "Port to listen";
            };

            package = mkOption {
              type = types.package;
              default = self.packages.x86_64-linux.default;
              description = "What package to use";
            };
          };

          config.systemd.services = mkIf cfg.enable {
            firesquare-ru = {
              enable = true;
              description = "firesquare.ru website";
              script = "${cfg.package}/bin/firesquare-ru";
              environment = {
                HOST = cfg.host;
                PORT = builtins.toString cfg.port;
              };
              unitConfig = {
                Type = "simple";
              };
              serviceConfig = {
                User = "firesquare-ru";
                Group = "firesquare-ru";
                Restart = "on-failure";
                RestartSec = "1s";
              };
              wantedBy = [ "multi-user.target" ];
            };
          };

          config.users = mkIf cfg.enable {
            users.firesquare-ru = {
              isSystemUser = true;
              description = "firesquare.ru user";
              group = "firesquare-ru";
            };

            groups.firesquare-ru = { };
          };
        });
    };
}
