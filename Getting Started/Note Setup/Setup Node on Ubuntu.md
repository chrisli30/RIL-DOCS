
[block:callout]
{
  "type": "info",
  "body": "Make sure your system meet the [minimal requirement](http://google.com) before installing the RSK nodes on it.  ",
  "title": "Minimal Requirement"
}
[/block]

[block:api-header]
{
  "title": "Install RSK node via Ubuntu Package"
}
[/block]
The easiest way to install and run a RSK node on Ubuntu is to do it through Ubuntu Package. By default, the node connects to MainNet.  To change the network choice, follow the instructions on [Switching Networks](http://google.com). To change other configuration of the node, please refer to the instructions on [RSK Node Configuration](http://google.com).


[block:api-header]
{
  "title": "Install via PPA"
}
[/block]
Type the commands below to install RskJ on Ubuntu using our PPAs for Ubuntu. 

The installed repo public key Fingerprint is 5EED 9995 C84A 49BC 02D4 F507 DF10 691F 518C 7BEA. Also, the public key could be found in document [Ubuntu Key Server](http://google.com).
[block:code]
{
  "codes": [
    {
      "code": "$ sudo add-apt-repository ppa:rsksmart/rskj\n$ sudo apt-get update\n$ sudo apt-get install rskj\n",
      "language": "shell"
    }
  ]
}
[/block]
During the installation, you will be asked to accept the terms and confirm the network.   
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/302140d-Screen_Shot_2019-06-04_at_1.11.27_PM.png",
        "Screen Shot 2019-06-04 at 1.11.27 PM.png",
        1764,
        1370,
        "#9f949f"
      ],
      "caption": "Choose Yes and Enter to accept the license to continue"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/53d7723-Screen_Shot_2019-06-04_at_1.11.54_PM.png",
        "Screen Shot 2019-06-04 at 1.11.54 PM.png",
        1760,
        1356,
        "#a297a3"
      ],
      "caption": "Choose Mainnet and Enter to continue"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Install via Direct Downloads"
}
[/block]
You can also download the RskJ Ubuntu Package for Orchid 0.6.2 and install it with command dpkg. Follow this [download link](https://launchpad.net/~rsksmart/+archive/ubuntu/rskj/+packages) to download the matched package for your ubuntu system.


[block:code]
{
  "codes": [
    {
      "code": "# first install openjdk-8-jre or oracle-java8-installer\nsudo apt-get install openjdk-8-jre\n\n# download the RskJ pacakge and find the file rskj_0.6.2~yourUbuntuVersionName_amd64.deb\n\n# run this command in the same directory as the deb file above\ndpkg -i rskj_0.6.2~yourUbuntuVersionName_amd64.deb",
      "language": "shell"
    }
  ]
}
[/block]
Before installation, you are recommended to check the SHA256 of the downloaded package file.
[block:code]
{
  "codes": [
    {
      "code": "5482fa4261d70756f5944fa907a9d73e2a13884d97d57aef2e553854d905ff16  rskj_0.6.2_bionic_amd64.deb\n68d4ce155f8171f7ad4d5a35bed7b566329f53945dadc2f6312f19f46c5d1ed1  rskj_0.6.2_bionic_i386.deb\nb5caa06e53774c7b1a2c5e3a54ecdfc2621fc37a597d16de7ac0a02afa6fb93b  rskj_0.6.2_trusty_amd64.deb\nfa9d10f1e902f300a98406f9575ac4e0d6172c9500384e417cf3c1157b7aadfb  rskj_0.6.2_trusty_i386.deb\n5eece84721d8d03179e5f3d17403b8c289c0fd6f33f5fafcef06103d5952ff2d  rskj_0.6.2_xenial_amd64.deb\n088182552ac5ea063ed2a1f4f47942a3d55fc29e29c87dc73d0c7bf9c3bf2171  rskj_0.6.2_xenial_i386.deb\n",
      "language": "shell"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "After installation"
}
[/block]
The installer will configure your node in the following paths:

  *   /etc/rsk: the directory where the config files will be placed.
  *   /usr/share/rsk: the directory where the RskJ JAR will be placed.
  *   /var/lib/rsk/database: the directory where the database will be stored.
  *   /var/log/rsk: the directory where the logs will be stored.


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/01c77ce-Screen_Shot_2019-06-04_at_1.14.31_PM.png",
        "Screen Shot 2019-06-04 at 1.14.31 PM.png",
        1770,
        240,
        "#292929"
      ],
      "caption": "Important paths and files from the installation"
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Start/Stop the Node"
}
[/block]
After installation, you can use the following commands to manage your node.

To start the node:
[block:code]
{
  "codes": [
    {
      "code": "sudo service rsk start",
      "language": "shell"
    }
  ]
}
[/block]
To stop the node: 
[block:code]
{
  "codes": [
    {
      "code": "sudo service rsk stop",
      "language": "shell"
    }
  ]
}
[/block]
To restart the node:
[block:code]
{
  "codes": [
    {
      "code": "sudo service rsk restart\n",
      "language": "shell"
    }
  ]
}
[/block]
To check the status of the node service:
[block:code]
{
  "codes": [
    {
      "code": "sudo service rsk stgatus",
      "language": "shell"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/67dd7bd-Screen_Shot_2019-06-04_at_1.13.05_PM.png",
        "Screen Shot 2019-06-04 at 1.13.05 PM.png",
        1770,
        308,
        "#2d2e2d"
      ],
      "caption": "status of a running rsk node on ubuntu"
    }
  ]
}
[/block]
