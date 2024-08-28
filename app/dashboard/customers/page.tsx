import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { fetchFilteredCustomers } from '@/app/lib/data';


export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers: FormattedCustomersTable[] = await fetchFilteredCustomers(query);

    return (
      <Suspense fallback={<p>Loading...</p>}>
        <CustomersTable customers={customers}/>
      </Suspense>
    )
}
