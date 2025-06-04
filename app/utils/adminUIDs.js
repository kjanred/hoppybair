const AdminUIDString = process.env.NEXT_PUBLIC_ADMIN_UID || '';
const AdminUIDArray = AdminUIDString.split(',').filter(uid => uid.trim() !== '')

export const isAdmin = (uid) => {
    if (!uid) {
        console.warn("isAdmin check alled with null or undefined UID");
        return false;
    }

    return AdminUIDArray.includes(uid);
} 