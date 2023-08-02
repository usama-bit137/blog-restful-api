exports.getPage = (page) => (req, res) => {
  res.status(200).render(page.toLowerCase(), {
    title: page,
  });
};
