provider "aws" {
  region = "eu-west-2"
  profile = "ray"
}

resource "aws_s3_bucket" "frontend-bucket" {
    bucket = "hunky-frontend"
}

data "aws_iam_policy_document" "frontend-bucket-policy" {
  statement {
    sid = "1"
    actions = [
      "s3:GetObject",
    ]
    resources = [
      "${aws_s3_bucket.frontend-bucket.arn}",
      "${aws_s3_bucket.frontend-bucket.arn}/*"
    ]
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}

