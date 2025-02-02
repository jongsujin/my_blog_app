SELECT p.*, GROUP_CONCAT(t.name) AS tags
FROM posts p
JOIN post_tags pt ON p.id = pt.post_id
JOIN tags t ON pt.tag_id = t.id
WHERE t.id = ?
GROUP BY p.id
ORDER BY p.created_at DESC
LIMIT ? OFFSET ?;