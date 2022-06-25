import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const websiteBucket = new Bucket(this, 'WebsiteBucket', {
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });

    new BucketDeployment(this, 'DeployReactWebsite', {
      sources: [Source.asset('../react_site/build')],
      destinationBucket: websiteBucket,
    });
  }
}
