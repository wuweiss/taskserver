{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-14_x
    # keep this line if you use bash
    pkgs.bashInteractive
  ];
}
