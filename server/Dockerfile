FROM ruby:2.7.1

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    vim \
    locales \
    locales-all \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

ENV LANG ja_JP.UTF-8

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

CMD ["rails", "s", "-b", "0.0.0.0"]
