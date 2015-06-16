FROM iojs:onbuild

# File Author / Maintainer
MAINTAINER Julian Popescu <jpopesculian@gmail.com>

# Install sass
RUN apt-get update
RUN apt-get install -y ruby
RUN gem install sass

# Copy app
ADD /. /app

# Install server dependencies
RUN cd /app && npm install

# Install client dependencies
RUN npm install -g jspm
RUN cd /app && jspm install

# Fix node command
ENV NODE "node --es_staging --harmony_arrow_functions --harmony_proxies --harmony_arrays --harmony_array_includes"

# Expose ports
EXPOSE 80

# Set the default directory where CMD will execute
WORKDIR /app

# Run the application
CMD ["npm", "start", "--prod", "--silent", "--port=80"]
