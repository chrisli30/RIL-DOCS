# RSK Developer Website Landing Page

## Get Started

### Requirements
Node version greater than 8.6.0
Yarn

### Steps
1. Installing Packages & Dependencies:
  `yarn`
  Yarn will download all the necessary packages and dependencies in to node_modules folder.
1. Start the app
  `yarn start`
  After the compiled process completed successfully, it will show success commands & redirect to the http://localhost:3000/ of browser where you will find the login screen of the app.
1. To create an Optimized Product Build of the app, you need to run a build command in you terminal at app root.
  1. `yarn build`
  1. `yarn global add serve`
  1. `nohup serve -l 5000 -s build &`

## Deployment

### Set up Apache server
1. Create apache virtual host config from template
`sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/example.com.conf`
2. Open the new file in your editor with root privileges:
`sudo vim /etc/apache2/sites-available/example.com.conf`
3. The file will look something like this (I've removed the comments here to make the file more approachable):
```<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
4. Update document root
`DocumentRoot /var/www/example.com/public_html`
5. Save and close the file.

6. Enable the New Virtual Host Files using a2ensite tool 
`sudo a2ensite example.com.conf`

7. Restart apache server
`sudo service apache2 restart`

## Coding

### Javascript formatter
We use eslint to validate and format javascript code.

npm run lint:fix <path/to/code>
e.g. npm run lint:fix ./app/components/ImageButton/

The actually command run is eslint --fix -- "<path/to/code>". Some basic rules can be auto-fixed and the eslint --fix command will print out non-fixables which need mannual repair. 

The complete rule settings are in
http://eslint.org/docs/rules/

## Known Bugs
