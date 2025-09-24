import logging
import boto3
from botocore.exceptions import ClientError

def list_directory_buckets(s3_client):
    """
    Prints a list of all directory buckets in a Region.

    :param s3_client: boto3 S3 client
    :return: True if there are buckets in the Region, else False
    """
    try:
        response = s3_client.list_directory_buckets()
        for bucket in response['Buckets']:
            print(bucket['Name'])
    except ClientError as e:
        logging.error(e)
        return False
    return True

if __name__ == '__main__':
    region = 'us-east-2'
    s3_client = boto3.client('s3', region_name=region)
    list_directory_buckets(s3_client)
