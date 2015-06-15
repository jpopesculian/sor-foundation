FROM iojs:onbuild

# File Author / Maintainer
MAINTAINER Julian Popescu <jpopesculian@gmail.com>

# Copy app
ADD /. /app

# Install server dependencies
RUN cd /app && npm install

# Install client dependencies
RUN npm install -g jspm
RUN cd /app && jspm install

# Install forever
RUN npm install -g forever

# Fix node command
ENV NODE = node --es_staging --harmony_arrow_functions --harmony_proxies --harmony_arrays --harmony_array_includes

# Expose ports
EXPOSE 80

# Set the default directory where CMD will execute
WORKDIR /app

# Run the application
CMD ["forever", "start", "-c", "$NODE", "app.js", "--prod", "--silent", "--port=80"]
