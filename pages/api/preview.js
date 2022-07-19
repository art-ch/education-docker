export default function handler(req, res) {
  res.setPreviewData({ user: 'Charlie' });
  res.redirect(req.query.redirect);
}
