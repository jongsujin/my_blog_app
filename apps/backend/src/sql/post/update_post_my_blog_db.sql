UPDATE posts 
SET title = ?, description = ?, content = ?, thumbnail = ?, slug = ?, updated_at = NOW() 
WHERE id = ?