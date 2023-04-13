export default async () => {
    console.log('7) GLOBAL TEARDOWN START');
    await global.testPgContainer.stop();
    console.log('8) GLOBAL TEARDOWN END');
};
