import React from 'react';



async function getLibraryData() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}



const libraryDetailsPage = async ({params}) => {

    const { id } = await params;

 const libraryData = await getLibraryData();

    return (
        <div>
            
        </div>
    );
};

export default libraryDetailsPage;