import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Nodes(
    $first: Int
    $after: String
    $variantsFirst2: Int
    $transform: ImageTransformInput
    $imagesFirst2: Int
    $identifiers: [HasMetafieldsIdentifier!]!
  ) {
    products(first: $first, after: $after) {
      nodes {
        title
        variants(first: $variantsFirst2) {
          nodes {
            title
            price {
              currencyCode
              amount
            }
            id
            quantityAvailable
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
        id
        featuredImage {
          height
          width
          url(transform: $transform)
          altText
          id
        }
        description
        metafields(identifiers: $identifiers) {
          value
          type
          key
          reference {
            ... on MediaImage {
              __typename
              image {
                url
                width
                height
                id
              }
            }
            ... on Video {
              previewImage {
                url
                width
                height
                id
              }
              mediaContentType
              sources {
                width
                url
                height
                format
              }
              id
            }
          }
        }
        images(first: $imagesFirst2) {
          nodes {
            height
            width
            url(transform: $transform)
            altText
            id
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;