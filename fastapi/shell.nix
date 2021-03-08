{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.python38Packages.python

    pkgs.python38Packages.python-language-server
    pkgs.python38Packages.jedi
    pkgs.python38Packages.rope
    pkgs.python38Packages.pyflakes
    pkgs.python38Packages.mccabe
    pkgs.python38Packages.pycodestyle
    pkgs.python38Packages.pydocstyle
    pkgs.python38Packages.pylint
    pkgs.python38Packages.flake8
    pkgs.python38Packages.autopep8
    pkgs.python38Packages.pytest

   # keep this line if you use bash
    pkgs.bashInteractive
  ];

  shellHook = ''
    echo starting...
  '';
  PORT = 5001;
}
