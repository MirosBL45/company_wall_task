// A function that removes duplicates and sorts alphabetically

export function uniqueAndSortedData(data) {
    // Duplicate removal
    const uniqueData = Array.from(
        new Set(data.map((role) => role.role_name))
    ).map((roleName) => {
        return data.find((role) => role.role_name === roleName);
    });

    // Alphabetical sorting
    const sortedData = uniqueData
        .slice()
        .sort((a, b) => a.role_name.localeCompare(b.role_name));

    return sortedData;
}