const test = QUnit.test;

QUnit.module('html equal');



test('normalizes whitespace', (assert) => {
    // Arrange
    const html = /*html*/`
            <div>
                <span>hello</span>
            </div>
    `;

    const expected = /*html*/`
        <div>
                <span>hello</span>
        </div>
    `;

    // Act
    // now built in as custom assert

    // Assert
    assert.htmlEqual(html, expected);
});