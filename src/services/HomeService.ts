export class HomeService {
	static async getHome() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					title: "Home",
					text: "Hello Home!"
				});
			}, 1000);
		});
	}
}
