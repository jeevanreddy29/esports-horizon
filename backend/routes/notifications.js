const express = require('express');
const jwt = require('jsonwebtoken');
const { supabase } = require('../db/database');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'esportshubindia_secret_2025';

function verifyAuth(req, res) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    res.status(401).json({ error: 'Login required' });
    return null;
  }
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    res.status(401).json({ error: 'Invalid token' });
    return null;
  }
}

// GET /api/notifications
router.get('/', async (req, res) => {
  try {
    const decoded = verifyAuth(req, res);
    if (!decoded) return;

    const { data: notifications, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', decoded.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ notifications: notifications || [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/notifications/:id/read
router.post('/:id/read', async (req, res) => {
  try {
    const decoded = verifyAuth(req, res);
    if (!decoded) return;

    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', req.params.id)
      .eq('user_id', decoded.id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/notifications/read-all
router.post('/read-all', async (req, res) => {
  try {
    const decoded = verifyAuth(req, res);
    if (!decoded) return;

    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', decoded.id);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
