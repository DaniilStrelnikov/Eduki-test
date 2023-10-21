const token =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJsVjZvNzJJQjd3cGdsRHhCIiwianRpIjoiNGFiZjA1MTI2NzNhY2ZkZTI5NTcxMGU3NjgxNjVjMmY1MWFjNzNlNTFkOWUwNWFkZmZjMjUyNzFkODY1ZDc4ZTYxM2FjZTNkNDYxNjhhZWYiLCJpYXQiOjE2Nzg2NjAxMjcuODIzNDcyLCJuYmYiOjE2Nzg2NjAxMjcuODIzNDc5LCJleHAiOjE3NDE4MTg1MjcuODIyNDUzLCJzdWIiOiIiLCJzY29wZXMiOlsicHVibGljIl19.uEaoxhTTfWqCoANRnNAwJaFU7Q0vz4K43XjYY3IwaXTeaydmcCgq1iPKpxrLsJ0Nrf8IPtyzYVFBiLDest-SkS76-Hbs75HMG66Wnl8WOyp5m8Uxc5KzAs6kzBwmhfr5b0TQEoLBVEEV5KSTJHWDTQlGlOJUwCRhoNHjqXJs9L4t_WOyKNE9y_Q2ED_z1dsEBNCl-HIiZ6c2Dci4pXZKs8-9jUpiaCga2tfjO6SvNqVkGle408p-9TRYD1BMTI1s7R1e8BbsTSo5FQJUgi6qUVapQCxu4WU3i3Wil1jjDKHqkSkafBl6VMX2ci-pj9fLKsUzuNSxCOUu9Jo8sbAE8e6VPOK3RxivIWN6BCX5sPBQIIWeS_bAjZ0vNBcubrJF4wwRwiUnSsgGKt3XnI9KhGsjaY5kmbqSnuQ6WdAvDkfvSA-HiX1xOCGmfQDXoGNrRR706bs7wlpqIbNF7lZZFjocfmiODif3rPj0QWf2amlSuCmlZzkyCoveNp43b2xYFQxcA1PlvAtchFTW6qA6vmqax7zoRfF1kQZg46P1pHimK3UchquAzeS4fALP0G93XQCprvN5iwNL9SuXgADlI-2QR1hWQ-i7RW2ElUhLt7PDQlEw5y49OLe5nhOMOxaSVRV8sbk5lX9CS28cJBezbg0ArLgFOv1nH88VNBZQKdM";

export const getPosts = async (page: number, searchString: string) => {
	// https://api.eduki.com/api/v1/elastic?limit=20&p=1&q=&world=de

	return await fetch(
		`https://api.eduki.com/api/v1/elastic?limit=20&p=${page}&q=&world=de`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}
	).then((data) => data.json());
};

export type MaterialType = {
	coverPath: string;
	isInYellowList: boolean;
	distributionType: number;
	sources: string;
	bundleListTotal: string;
	description: string;
	customPagesTotal: number;
	language: string;
	bestInCategories: {
		id: number;
		title: string;
		slug: string;
	}[];
	isActive: boolean;
	titleUpdatedByHuman: boolean;
	materialFiles: {
		createdAt: string;
		type: string;
	}[];
	title: string;
	createdAt: string;
	firstPreviewImage: {
		plain: string;
		watermarked: string;
	};
	world: string;
	price: number;
	inFavorites: number;
	averageRating: number;
	id: number;
	isCompletedByAuthor: boolean;
	bundle: boolean;
	slug: string;
	totalFeedbacks: number;
	ccStatus: string;
	descriptionUpdatedByHuman: boolean;
	materialTopCategories: {
		id: number;
		title: string;
	}[];
	author: {
		followersNumber: number;
		becameSellerAt: string;
		searchMode: boolean;
		details: {
			profileBackgroundPath: string;
			world: string;
			totalMaterials: number;
			publicName: string;
			imagePath: string;
			needsSellerInfo: false;
			subjects: string[];
			classes: string[];
			privateProfile: false;
			userType: number;
			teachableCertified: boolean;
		};
		id: number;
		slug: string;
	};
	fileTypes: string;
	tags: string[];
	schoolTypes: {
		id: number;
		title: string;
		interdisciplinary: boolean;
	}[];
	authorFeatured: boolean;
	totalPages: number;
	isShadow: boolean;
	materialTypes: {
		id: number;
		title: string;
	}[];
	hasBibPreview: boolean;
	status: string;
	hasFixedPrice: boolean;
};
