

export interface UserResponse {
    id: number,
    username: string,
    email: string,
    phone: string,
    verify_at: string,
    created_at: string;
    updated_at: string;
    roles: Response[];
    // profile: UserProfileResponse;
}
