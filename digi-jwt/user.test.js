const {hash, compare} = require('./user');

test('Verify same password', async() => {
    const hashedPassword = await hash('password');
    const same = await compare('password', hashedPassword);
    expect(same).toBeTruthy();
});

test('Verify different password', async() => {
    const hashedPassword = await hash('password');
    const same = await compare('differentPassword', hashedPassword);
    expect(same).toBeFalsy();
});