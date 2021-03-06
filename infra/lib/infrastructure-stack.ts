import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // First React Website
    const websiteBucket1 = new Bucket(this, 'WebsiteBucket1', {
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });

    new BucketDeployment(this, 'DeployReactWebsite1', {
      sources: [Source.asset('../react_site/build')],
      destinationBucket: websiteBucket1,
    });

    // Second React Website
    const websiteBucket2 = new Bucket(this, 'WebsiteBucket2', {
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });

    new BucketDeployment(this, 'DeployReactWebsite2', {
      sources: [Source.asset('../react_meme/build')],
      destinationBucket: websiteBucket2,
    });
  }
}
