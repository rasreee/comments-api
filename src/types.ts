export interface Comment {
	id: number;
	user: string;
	content: string;
	createdAt: string;
	editedAt: string;
}


export interface CreateCommentRequest {
	user: string;
	content: string;
}


export interface UpdateCommentRequest {
	id: any;
}


export interface DeleteCommentRequest {
	id: any;
}
