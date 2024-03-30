(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{427:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"linux-快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-快捷键"}},[s._v("#")]),s._v(" "),t("strong",[s._v("linux 快捷键")])]),s._v(" "),t("p",[s._v("Restart")]),s._v(" "),t("ol",[t("li",[s._v("Go to tty , (ctal + alt + [2-4])  and login ")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("sudo pkilll Xorg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" sudo restart lightdm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("If useless")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("!!! Don't restart ..q fdsf")])]),s._v(" "),t("li",[t("p",[s._v("Pressing 'ctrl '+ 'alt'")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Press 'Prtsc'  (which is the screen shot)")])]),s._v(" "),t("li",[t("p",[s._v("Press 'R', then 'E', 'I', 'S' 'U' 'B'")])])])])])])]),s._v(" "),t("p",[s._v("查找大文件")]),s._v(" "),t("blockquote",[t("p",[s._v("find ~ -type f -exec du -h {} + | sort -rh | head -n 10")])]),s._v(" "),t("p",[s._v(" 从gui打开当前目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xdg-open")]),s._v(" ./ \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("tmux 的使用，因为server无screen")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("tmux "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sessions\ntmux attach "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t session_name_or_number\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出当前 tmux 会话时，可以输入 exit 命令或按下 Ctrl-d 键。")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restart desktop server")]),s._v("\nsudo systemctl restart gdm\nsudo systemctl restart lightdm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://linuxconfig.org/how-to-restart-gui-on-ubuntu-22-04-jammy-jellyfish")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[s._v("#")]),s._v(" tools")]),s._v(" "),t("h3",{attrs:{id:"tmux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tmux"}},[s._v("#")]),s._v(" Tmux")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("tmux new：创建一个新会话。\ntmux new "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s mysession：创建一个名为“mysession”的新会话。\ntmux kill"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("session "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t mysession：关闭名为“mysession”的会话。\ntmux ls：列出所有会话。\ntmux attach "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t mysession：附加到名为“mysession”的会话\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("   tmux 是一个终端多路复用器，它允许你在一个终端窗口中创建多个分割窗格，每个窗格可以运行不同的命令或应用程序。这使得你可以同时管理多个终端会话，非常有用，特别是在远程服务器上工作时。以下是一些 tmux 的基本使用方法：")]),s._v(" "),t("ol",[t("li",[t("p",[t("strong",[s._v("启动 tmux")]),s._v("： 在终端中输入 tmux 命令，然后按 Enter 键来启动 tmux 会话。你会看到一个新的终端窗格打开，其中包含一个命令行提示符。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("tmux 基本命令")]),s._v("：")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("创建一个新窗格：Ctrl-b %（按住 Ctrl 键和 b 键，然后松开，再按百分号键 %）")])]),s._v(" "),t("li",[t("p",[s._v("切换窗格方向：Ctrl-b 箭头键（左、右、上、下）")])]),s._v(" "),t("li",[t("p",[s._v("关闭当前窗格：Ctrl-b x")])]),s._v(" "),t("li",[t("p",[s._v("切换窗格：Ctrl-b o（按住 Ctrl 键和 b 键，然后松开，再按小写字母 o 键）")])])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("新建窗口")]),s._v("：")])]),s._v(" "),t("ul",[t("li",[s._v("在 tmux 中，你可以创建多个窗口，每个窗口包含一个或多个分割窗格。要创建一个新窗口，按住 Ctrl-b c（按住 Ctrl 键和 b 键，然后松开，再按 c 键）。")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[s._v("分割窗格")]),s._v("：")])]),s._v(" "),t("ul",[t("li",[s._v('tmux 允许你在窗格中创建水平或垂直分割。要在当前窗格中创建一个新的水平分割窗格，使用 Ctrl-b " 命令。要创建一个新的垂直分割窗格，使用 Ctrl-b % 命令。')])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("strong",[s._v("切换窗口")]),s._v("：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("切换到下一个窗口：Ctrl-b n")])]),s._v(" "),t("li",[t("p",[s._v("切换到上一个窗口：Ctrl-b p")])]),s._v(" "),t("li",[t("p",[s._v("切换到指定窗口编号：Ctrl-b 0 到 Ctrl-b 9")])])]),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("strong",[s._v("退出 tmux")]),s._v("：")])]),s._v(" "),t("ul",[t("li",[s._v("退出当前 tmux 会话时，可以输入 exit 命令或按下 Ctrl-d 键。")])]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("strong",[s._v("分离和重新附加会话")]),s._v("：")])]),s._v(" "),t("ul",[t("li",[s._v("你可以分离 tmux 会话，使其在后台运行。按下 Ctrl-b d 可以分离当前会话。要重新附加到会话，可以运行 tmux attach-session 命令，后跟会话的名称或编号。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"images/image-1.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v('Press "ctrl+b" exit the mode ("read mode")')])]),s._v(" "),t("p",[s._v("这些是 tmux 的一些基本用法。tmux 还具有更多高级功能，如会话管理、自定义配置、窗口布局等。你可以查看 tmux 的官方文档或使用 man tmux 命令来获取更多详细信息。")]),s._v(" "),t("h3",{attrs:{id:"忘记使用tmux-bg后台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忘记使用tmux-bg后台"}},[s._v("#")]),s._v(" 忘记使用tmux,bg后台")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + z")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" Stopped "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rsync"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n然后我们可以把程序调度到后台执行：（bg 后面的数字为作业号）\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#bg 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rsync"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n用 jobs 命令查看正在运行的任务：\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jobs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" Running "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rsync"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n如果想把它调回到前台运行， 可以用\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#fg 1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rsync"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("[ctrl]+z 将前台任务丢到后台中暂停")]),s._v(" "),t("p",[s._v("jobs 查看后台的工作状态")]),s._v(" "),t("p",[s._v("fg %jobnumber 将后台的任务拿到前台来处理")]),s._v(" "),t("p",[s._v("bg %jobnumber 将任务放到后台中去处理")]),s._v(" "),t("p",[s._v("kill 管理后台的任务")]),s._v(" "),t("p",[s._v("https://www.ohyee.cc/post/note_install_git_without_root书签："),t("a",{attrs:{href:"https://www.ohyee.cc/post/note_install_git_without_root",target:"_blank",rel:"noopener noreferrer"}},[s._v("非Root用户安装git|OhYee 博客"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("p",[s._v("docker run -v /home/tao:/data --gpus all --name=ubuntu20.04-CUDA --network host -it nvidia/cuda:11.4.3-devel-ubuntu20.04")]),s._v(" "),t("p",[t("img",{attrs:{src:"images/LKQ7bYUzqoWJ4YxZnd4c62aUnIf.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /data/dengtao/Desktop:/data "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /data/dengtao/docker/apt-cache:/var/cache/apt/archives "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /tmp/.X11-unix:/tmp/.X11-unix "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$DISPLAY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--gpus")]),s._v(" all "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu20.04-CUDA "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" nvidia/cuda:11.4.3-devel-ubuntu20.04\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libpcl-dev "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"docker-start-i-ubun-直接tab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-start-i-ubun-直接tab"}},[s._v("#")]),s._v(" docker start -i ubun...直接tab")]),s._v(" "),t("p",[t("strong",[s._v("本机")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--runtime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nvidia "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/tao/Desktop:/data "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu20.04-torch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$DISPLAY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /tmp/.X11-unix:/tmp/.X11-unix   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" pytorch/pytorch:1.12.1-cuda11.3-cudnn8-devel\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libpcl-dev "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--gpus")]),s._v(" all "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/tao/Desktop:/data "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu20.04-torch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" pytorch/pytorch:1.12.1-cuda11.3-cudnn8-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("成功完成docker gpu配置，gxhost +  can resolve it =⇒ THE GUI problem")]),s._v(" "),t("p",[s._v("总结一下：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("配置 NVIDIA Docker 运行时runtime")])]),s._v(" "),t("li",[t("p",[s._v("确保你已正确安装 NVIDIA 驱动程序。你可以使用 "),t("code",[s._v("nvidia-smi")]),s._v(" 命令来验证 NVIDIA 驱动程序是否正常安装和可用。")])]),s._v(" "),t("li",[t("p",[s._v("安装 NVIDIA Container Toolkit，这是与 Docker 集成 NVIDIA GPU 运行时的一种方式。可以按照 NVIDIA Container Toolkit 的官方文档进行安装和配置："),t("a",{attrs:{href:"https://github.com/NVIDIA/nvidia-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/NVIDIA/nvidia-docker"),t("OutboundLink")],1)]),s._v(" "),t("ol",[t("li",[s._v("直接到官方文档里配置就好，很轻松。注意只需要配置docker的那个")])])])]),s._v(" "),t("p",[s._v("之后考虑后台任务")]),s._v(" "),t("p",[t("img",{attrs:{src:"images/Rae2byzz1ovT0NxCItUcMQMenff.png",alt:""}})]),s._v(" "),t("p",[s._v("2023年10月6日21:10:41")]),s._v(" "),t("p",[s._v("docker 启动 done")]),s._v(" "),t("p",[s._v("数据挂载 done")]),s._v(" "),t("div",{staticClass:"language-plain&#x20;text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("apt install libpcl-dev6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("docker exec -it "),t("em",[s._v("container_id")]),s._v("  /bin/bash")]),s._v(" "),t("h3",{attrs:{id:"refernce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#refernce"}},[s._v("#")]),s._v(" Refernce")]),s._v(" "),t("h2",{attrs:{id:"dafny"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dafny"}},[s._v("#")]),s._v(" Dafny")]),s._v(" "),t("p",[s._v("Install the "),t("strong",[s._v("binary")]),s._v(" file, not buiding from source code ")]),s._v(" "),t("p",[s._v("Just download from github/release")]),s._v(" "),t("p",[s._v("https://dafny.org/dafny/Installation")]),s._v(" "),t("p",[s._v("一个别人的tutorial 教程")]),s._v(" "),t("h2",{attrs:{id:"qq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qq"}},[s._v("#")]),s._v(" QQ")]),s._v(" "),t("p",[s._v("https://im.qq.com/linuxqq/index.shtml")]),s._v(" "),t("p",[s._v("Just download the deb version, then ")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("sudo dpkg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i linuxqq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"wechat-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechat-install"}},[s._v("#")]),s._v(" Wechat install")]),s._v(" "),t("p",[t("s",[s._v("ubuntu 22")])]),s._v(" "),t("p",[t("s",[s._v("option:")])]),s._v(" "),t("p",[t("s",[s._v("wine hq  or 优麒麟")])]),s._v(" "),t("p",[s._v("~~Wine  bad !!! ~~")]),s._v(" "),t("p",[s._v("~~优麒麟 good ~~")]),s._v(" "),t("p",[s._v("直接用官方的. 2024.3.21")]),s._v(" "),t("h2",{attrs:{id:"fcitx5-input-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fcitx5-input-method"}},[s._v("#")]),s._v(" fcitx5:  Input method")]),s._v(" "),t("p",[s._v("You can also ask newbing. ")]),s._v(" "),t("p",[s._v("https://zhuanlan.zhihu.com/p/508797663")]),s._v(" "),t("h2",{attrs:{id:"shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell"}},[s._v("#")]),s._v(" Shell")]),s._v(" "),t("p",[s._v("Make multiple related folders. ")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义文件夹的前缀")]),s._v("\nprefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pcd_seg"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环创建文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" do\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用mkdir创建文件夹")]),s._v("\n    mkdir "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${prefix}${i}"')]),s._v("\ndone\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("watch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n1 nvidia"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("smi \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dynamic check the gpu memory")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode"}},[s._v("#")]),s._v(" Vscode")]),s._v(" "),t("p",[s._v("ctrk+(k, 0-zero)")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("行首（光标移动到当前行的开头）：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Windows / Linux: "),t("code",[s._v("Home")]),s._v(" 键")])]),s._v(" "),t("li",[t("p",[s._v("macOS: "),t("code",[s._v("Command + 左箭头")])])])])]),s._v(" "),t("li",[t("p",[s._v("行末（光标移动到当前行的末尾）：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Windows / Linux: "),t("code",[s._v("End")]),s._v(" 键")])]),s._v(" "),t("li",[t("p",[s._v("macOS: "),t("code",[s._v("Command + 右箭头")])])])])])]),s._v(" "),t("p",[s._v("这些快捷键可以帮助你快速定位到行首和行末，以提高代码编辑效率。如果你想要选定文本从行首到行末，你可以使用 "),t("code",[s._v("Shift")]),s._v(" 键加上上述快捷键。例如，"),t("code",[s._v("Shift + Home")]),s._v(" 会选择从光标位置到行首的文本，而 "),t("code",[s._v("Shift + End")]),s._v(" 会选择从光标位置到行末的文本。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("折叠所有代码块："),t("code",[s._v("Ctrl + K, 0")]),s._v(" 或 "),t("code",[s._v("Ctrl + K, Ctrl + 0")])])]),s._v(" "),t("li",[t("p",[s._v("展开所有代码块："),t("code",[s._v("Ctrl + K, J")]),s._v(" 或 "),t("code",[s._v("Ctrl + K, Ctrl + J")])])]),s._v(" "),t("li",[t("p",[s._v("折叠当前代码块："),t("code",[s._v("Ctrl + Shift + [")]),s._v(" 或 "),t("code",[s._v("Ctrl + ]")])])]),s._v(" "),t("li",[t("p",[s._v("展开当前代码块："),t("code",[s._v("Ctrl + Shift + ]")]),s._v(" 或 "),t("code",[s._v("Ctrl + [")])])])]),s._v(" "),t("h2",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),t("div",{staticClass:"language-c# line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git submodule init\ngit submodule add /path/to/sub_module1\n# or git submodule add https://github.com/example/sub_project\n#git submodule add /path/to/sub_module2\ngit submodule update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"tensorflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow"}},[s._v("#")]),s._v(" Tensorflow ")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("conda install tensorflow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gpu\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if occur numpy problem, install numpy=1.19.5 version")]),s._v("\n\n\n\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Check instal")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" tensorflow "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" tf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check if GPU is available")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Num GPUs Available: "')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("confi g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("experimental"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list_physical_devices"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GPU'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check TensorFlow version")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TensorFlow version:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__version__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v('https://numpy.org/devdocs/release/1.20.0-notes.html  numpy 1.20.0 deprecate the np."type" => "type"')]),s._v(" "),t("p",[t("img",{attrs:{src:"images/image.png",alt:""}})])])}),[],!1,null,null,null);t.default=n.exports}}]);