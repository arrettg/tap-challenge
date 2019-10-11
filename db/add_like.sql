UPDATE product
SET likes = likes +1
WHERE product_id = $1