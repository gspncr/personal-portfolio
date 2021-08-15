# gspncr.com
My attempt at better learning React via [a YouTube tutorial](https://www.youtube.com/watch?v=7WwtzsSHdpI)

## Run locally

start without a browser, via yarn: `BROWSER=none yarn start`

Will listen on 127.0.0.1:3000

## Build and serve via AWS S3

`npm run build && aws s3 sync build/ s3://gspncr.com`
