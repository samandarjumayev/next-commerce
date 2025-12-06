import { Slash } from 'lucide-react';

export default function Account() {
  return <div>
    <div className='w-[1100px] mx-auto'>
      <div className='flex pt-[80px] justify-between items-center'>
        <div className='flex items-center gap-2'>
          <p className='text-[#000000] font-normal text-[14px] leading-[21px] tracking-normal'>Home</p>
          <p className='text-[#00000080] font-normal text-[14px] leading-[21px] tracking-normal'>/</p>
          <p className='text-[#000000] font-normal text-[14px] leading-[21px] tracking-normal'>My Account</p>
        </div>
        <div>
          <h1 className='text-[#00000080] font-normal text-[14px] leading-[21px] tracking-normal'>Welcome! <span className='text-[#DB4444] font-normal text-[14px] leading-[21px] tracking-normal'>Md Rimel</span></h1>
        </div>
      </div>
      <div className='pt-[80px] flex items-start justify-between'>
        <div>
          <h1 className='text-[#000000] font-bold text-[16px] leading-[21px] tracking-normal'>Manage My Account</h1>
          <div className='pl-[35px] flex flex-col gap-[8px] py-[16px]'>
            <p className='text-[#DB4444] font-normal text-[15px] leading-[21px] tracking-normal cursor-pointer'>My Profile</p>
            <p className='text-[#000000] font-normal text-[15px] leading-[21px] tracking-normal cursor-pointer'>Address Book</p>
            <p className='text-[#000000] font-normal text-[15px] leading-[21px] tracking-normal cursor-pointer'>My Payment Options</p>
          </div>
          <h1 className='text-[#000000] font-bold text-[16px] leading-[21px] tracking-normal pt-[8px]'>My Orders</h1>
          <div className='pl-[35px] flex flex-col gap-[8px] py-[16px]'>
            <p className='text-[#000000] font-normal text-[15px] leading-[21px] tracking-normal cursor-pointer'>My Returns</p>
            <p className='text-[#000000] font-normal text-[15px] leading-[21px] tracking-normal cursor-pointer'>My Cancellations</p>
          </div>
          <h1 className='text-[#000000] font-bold text-[16px] leading-[21px] tracking-normal'>My WishList</h1>
        </div>
        <div className='w-[870px] h-[630px] bg-amber-200 py-[40px] px-[80px]'>
          Content Area
        </div>
      </div>
    </div>
  </div>
}

// Nuriddin