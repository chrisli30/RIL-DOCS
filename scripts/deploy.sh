# Readme

# In order to run this script you need to install sshpass via below command first.
# brew install https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb


# Username, password and hostname of remote machine
export USERNAME=root
export SSHPASS='5b-H-)49Dc(Yq=B?'
export HOSTNAME=207.148.118.178

set -x #echo on

# 1. Turn on echo
# 2. Navigate to project directory
# 3. git pull
# 4. Kill existing session TCP:5000. Note that in ssh session '\$' needs to be used to replace $ in normal bash
# For example, sudo kill -9 $(lsof -ti tcp:5001) would work in bash but in ssh it has to be "-9 \$()"
# 5. yarn to install new packages
# 6. yarn build and serve with nohup
sshpass -e ssh -T -o StrictHostKeyChecking=no $USERNAME@$HOSTNAME << !
set -x #echo on
cd /var/www/RSK-landing/
git pull
echo \$(lsof -i tcp:5000 | grep root | gawk '{print $2}')
sudo kill -9 \$(lsof -i tcp:5000 | grep root | gawk '{print \$2}')
yarn
yarn build
yarn global add serve
nohup serve -l 5000 -s build &
!

# expected results:
# 2016-10-20T22:50:07.728+0000	writing prod._User to stdout
# 2016-10-20T22:50:07.729+0000	dumped 15 documents

