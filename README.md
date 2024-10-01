# Tenacious Legal

Production React application built for Tenacious Legal, a legal process serving entity in Twin Falls, ID.

[Live Website](https://tenacious.legal/)

## Technologies and Demo

  - Amazon Web Services S3 and CloudFront Global CDN
  - React 18, React Router 6
  - Tailwind
  - Emailjs (contact form)

![alt text](/src/images/pdemo3.gif "Demo")

## Amazon Web Services

1. Add client's domains, MX records and other A records to AWS Route53
2. Update nameserver records to point to Amazon's Route53 DNS (no downtime on email delivery or website)
3. Create CloudFront distributions and S3 Bucket (tenaciouslegalsupport.com re-route to tenacious.legal) 
3. Add CloudFront Distribution to primary A record
4. SSL Enabled with http redirects with CloudFront to protect data sent by contact form
5. Direct React Routes work with S3 bucket by pointing error document to index.html

## Dynamic Pricing Calculator

  Developed real-time pricing calulator. It includes a searchable drop down populated with an array of objects(cities) for pricing modifiers by city. Printing fee calculator at 26 pages or more. Dynamic link to pay the calculated price.

![alt text](/src/images/pricingcalc.gif "Pricing Calculator")

## Contact Form

  To help aleviate spam emails, I added a honey pot field. This is a hidden field for a "City" that will cause the form to fail if populated.

![alt text](/src/images/honeypot.png "Legacy Website")

## Github Deployment Action

  When a pull request from staging to main is merged, a [GitHub action](https://github.com/patrick-misner/tenacious-legal/blob/main/.github/workflows/deploy.yml) is triggered. This action performs several tasks, including installing dependencies, building the create-react app, uploading the new build files to the S3 bucket, and invalidating the CloudFront cache so that updates to the website are reflected quickly for end users accessing any AWS Edge location.

## Legacy Website no SSL

![alt text](/src/images/legacy.jpg "Legacy Website")

