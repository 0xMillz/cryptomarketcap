import request from 'supertest';

describe('App (e2e)', () => {
    it('should return status code 200 when GETting /api/v1', async () => {
        const response = await request(global.app.getHttpServer()).get('/api/v1');
        expect(response.status).toBe(200);
    });

    it('should return response text "Hello Crypto!" when GETting /api/v1', async () => {
        const response = await request(global.app.getHttpServer()).get('/api/v1');
        expect(response.text).toEqual('Hello Crypto!');
    });
});
