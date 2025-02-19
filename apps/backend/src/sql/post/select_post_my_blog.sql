SELECT 
    p.*,
    GROUP_CONCAT(t.name) as tags
FROM posts p
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
GROUP BY p.id
ORDER BY p.created_at DESC
LIMIT ? OFFSET ?;