---
title: linux下将zotero附件存储于google drive
date: 2024-03-30
---
Googledrive 无linux 的desktop version ,因此需要借助第三方工具实现本地挂载来达到文件同步的目的.

具体安装google-drive-ocamlfuse可以参考官方https://github.com/astrada/google-drive-ocamlfuse

```shell
sudo add-apt-repository ppa:alessandro-strada/ppa
sudo apt-get update
sudo apt-get install google-drive-ocamlfuse
```

1. 如下,新建目录GoogleDrive之后,将同步盘挂载于\~/GoogleDrive, 挂载完成之后就可以看到你的GoogleDrive内部的文件了,在其中新建一个Zotero direcotory.

以下参考Refer1

![](/images/image-3.png)

* 首选项-同步,取消勾选存储full-files

![](/images/image.png)



* 安装并设置zotfile 插件

  1. 设置两个path,souce path and new path.

  ![](/images/image-2.png)

  完成之后关闭即可

随机存储one paper 到zotero就可以看到Googledrive上已经有了paper 的pdf了.

![](/images/image-1.png)

之后每次重启电脑都要再次运行挂载命令来同步文件.

### Reference

https://cn.linux-console.net/?p=14990

https://medium.com/@hasal98fernando/use-google-drive-to-store-pdfs-with-zotero-in-3-steps-c36135d53f86

https://github.com/astrada/google-drive-ocamlfuse

