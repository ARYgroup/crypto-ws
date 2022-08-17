# Setting up Digital Ocean Droplet 
* Create and Configure a D.Ocean Droplet 
* Configure a Domain Name
* Install and Configure Nginx 
* Instal Node.js 
* Install nvm 
* Deploy Next.js App
* Configure Nginx as a reverse proxy 
* Configure SSL Encryption 

## 👟 Up and Running 
**Objective**: Initial setup of droplet environment and testing Nginx configuration on native hardware 

### Install and Configure Nginx 
1. Nginx is one of the most popular web servers and helps host some of the largest and highest-traffic sites out there. It's more resource-friendly than Apache in most cases and can be used as either a web server or reverse proxy.

code: `sudo apt-get update && sudo apt-get install nginx`

2. From here adjust the ufw firewall settings to add nginx to allowed connections list 

code:  
```
// check to see list of available apps
sudo ufw app list

// add Nginx HTTP to allowed connections list 
sudo ufw allow 'Nginx HTTP'

// verify the above changes
sudo ufw status
```

3. Test nginx configuration 

code: `systemctl status nginx`

## 🐳 Docker Environment 
**Objective**:  Use docker to setup an nginx environment that serves a next.js application on an exposed port on the front-end 
