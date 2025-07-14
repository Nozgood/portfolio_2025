---
id: 1
title: "Blog Post Test Markdown"
slug: "test_markdown"
date: "July 12, 2025"
desc: "Dont forget to be the person you wanna be, even if there are some constraints, deal with it and give your better each day. STEP BY STEP"
author: "nowfeel.dev"
--- 

### Nozgood config directory

Here you will find all my configs (nvim among others)

#### About Nvim 

Main inspiration:

- kickstart.nvim
- Henry Misc youtube video (https://www.youtube.com/watch?v=KYDG3AHgYEs&t=1735s)
- Primeagen for the file structure (https://www.youtube.com/watch?v=w7i4amO_zaE&t=1383s) => care the lsp config is outdated since nvim 0.11.0

#### About terminal emulator

I've started to use Wezterm in June 2K25, you can find a `wezterm.lua` in this directory but if you want to use it you will need to 
copy this file in your $HOME 


#### about ideavimrc

ideavimrc is used to configure some shortcuts + nvim config on Jetbrains IDEs (Jetbrains IDEs were the previous tools i used)

#### tmux configuration

my tmux configuration comes from this video from Josean Martinez:
- https://www.youtube.com/watch?v=U-omALWIBos

to use this configuration: 

- clone the config at the ~/ of your computer
- install tmux package manager
```sh
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```
- launch tmux
- run `<C-a>` and `<Shift-I>` to install plugins 
- note: if you've done all this steps in a tmux session, exit and launch back tmux, the config need to be reloaded
- check this cheatsheet to make tmux shortcuts your own: https://tmuxcheatsheet.com/
