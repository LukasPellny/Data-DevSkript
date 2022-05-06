const checkScopes = permissions => jwtAuthz(permissions);

app.get('/users', checkScopes(['read:users']), (req, res) => {
  res.json({ users: [{ id: 1 }, { id: 2 }] })
})

app.post('/user', checkScopes(['create:users']), (req, res) => {
  res.sendStatus(201);
});

app.delete('/user', checkScopes(['delete:users']), (req, res) => {
  res.sendStatus(200);
});