import request from 'supertest';

describe('Assets (e2e)', () => {
    it('should return status code 200 when GETting /api/v1/assets', async () => {
        const response = await request(global.app.getHttpServer()).get('/api/v1/assets');
        expect(response.status).toBe(200);
    });

    it('should return response body containing Bitcoin and Ethereum when GETting /api/v1/assets', async () => {
        const response = await request(global.app.getHttpServer()).get('/api/v1/assets');
        expect(response.body[0].slug).toEqual('bitcoin');
    });
});
