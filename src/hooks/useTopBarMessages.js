import useSWR from 'swr';

const getTopBarMessages = async () => {
    // Since this is a static array, you don't really need async here
    const response = [
        <p key="message-1">
            Enjoy free shipping and easy returns. Rest easy with our
            100-night risk-free trial!
        </p>,
        <span key="message-2" className='flex flex-wrap justify-center'>
            <span className='mr-1'>
                Curious? Our Sleep Specialists are{' '}
            </span>
            <span>
                <a className='text-blue-500 underline' href='/help'>
                    just a call away
                </a>
                .
            </span>
        </span>,
    ];

    return response;
};

export default function useTopBarMessages() {
    // Use SWR to fetch the top bar messages
    const { data, error } = useSWR(
        `/top-bar-messages`, 
        getTopBarMessages, 
        { suspense: false }
    );

    // If no data yet, return empty array as fallback
    const messages = data || [];

    return { messages, error, isLoading: !error && !data };
}
