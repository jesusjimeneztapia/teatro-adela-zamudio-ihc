const SEATS = [
  {
    id: '050e2541-1ba9-43a8-baad-c4ab5fdb8504',
    name: '1A',
    state: 'occupied'
  },
  {
    id: '42e1cee1-9ddc-4865-a18b-a96ff76c03f6',
    name: '2A',
    state: 'occupied'
  },
  {
    id: 'c6d85d11-ac6f-465b-ac40-aa58ef9dfe0f',
    name: '3A',
    state: 'occupied'
  },
  {
    id: '430e1acb-a1e0-4d4c-893a-0482764a0f88',
    name: '4A',
    state: 'occupied'
  },
  {
    id: 'f42578bb-6d71-4125-9538-7bedea78d5d1',
    name: '5A',
    state: 'occupied'
  },
  {
    id: 'a55cbb6c-1f39-435c-bb84-16200a653582',
    name: '6A',
    state: 'occupied'
  },
  {
    id: '76edb74f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7A',
    state: 'occupied'
  },
  {
    id: '077e9c3b-d7de-4d00-abb8-a6f815253452',
    name: '8A',
    state: 'occupied'
  },
  {
    id: 'c2b75b06-a5b6-4156-b874-19b4d0f17388',
    name: '9A',
    state: 'occupied'
  },
  {
    id: '328e2f61-b606-47df-991e-5848cd7ba743',
    name: '10A',
    state: 'occupied'
  },
  {
    id: 'cdb5d312-2919-443c-9de5-969ed372cd49',
    name: '11A',
    state: 'occupied'
  },


  {
    id: 'f50e2541-1ba9-43a8-baad-c4ab5fdb8504',
    name: '1B',
    state: 'occupied'
  },
  {
    id: '42e1cee1-9ddc-4865-a180-a96ff76c03f6',
    name: '2B',
    state: 'occupied'
  },
  {
    id: 'c6d85d11-a56f-465b-ac40-aa58ef9dfe0f',
    name: '3B',
    state: 'occupied'
  },
  {
    id: '430e1acb-a1e0-4d4c-899a-0482764a0f88',
    name: '4B',
    state: 'occupied'
  },
  {
    id: 'f42578bb-6a71-4125-9538-7bedea78d5d1',
    name: '5B',
    state: 'occupied'
  },
  {
    id: 'a55cb36c-1f39-435c-bb84-16200a653582',
    name: '6B',
    state: 'occupied'
  },
  {
    id: '76eab74f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7B',
    state: 'occupied'
  },
  {
    id: '077e9c3b-d7de-4d00-abb8-a6f815223452',
    name: '8B',
    state: 'occupied'
  },
  {
    id: 'c2b70b06-a5b6-4156-b874-19b4d0f17388',
    name: '9B',
    state: 'occupied'
  },
  {
    id: '32de2f61-b606-47df-991e-5848cd7ba743',
    name: '10B',
    state: 'occupied'
  },
  {
    id: 'cdb5d312-2919-443c-9de5-969ed312cd49',
    name: '11B',
    state: 'occupied'
  },


  {
    id: 'f50e0541-1ba9-43a8-baad-c4ab5fdb8504',
    name: '1C',
    state: 'occupied'
  },
  {
    id: '42efcee1-9ddc-4865-a180-a96ff76c03f6',
    name: '2C',
    state: 'occupied'
  },
  {
    id: 'c6d85d11-156f-465b-ac40-aa58ef9dfe0f',
    name: '3C',
    state: 'occupied'
  },
  {
    id: '430e1adb-a1e0-4d4c-899a-0482764a0f88',
    name: '4C',
    state: 'occupied'
  },
  {
    id: 'f42578ab-6a71-4125-9538-7bedea78d5d1',
    name: '5C',
    state: 'occupied'
  },
  {
    id: 'a45cb36c-1f39-435c-bb84-16200a653582',
    name: '6C',
    state: 'occupied'
  },
  {
    id: '76eab34f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7C',
    state: 'occupied'
  },
  {
    id: '877e9c3b-d7de-4d00-abb8-a6f815223452',
    name: '8C',
    state: 'occupied'
  },
  {
    id: 'c2b70906-a5b6-4156-b874-19b4d0f17388',
    name: '9C',
    state: 'occupied'
  },
  {
    id: '32de2f61-b6a6-47df-991e-5848cd7ba743',
    name: '10C',
    state: 'occupied'
  },
  {
    id: 'cdb5b312-2919-443c-9de5-969ed312cd49',
    name: '11C',
    state: 'occupied'
  },


  {
    id: 'f50e2541-1ba9-43a8-baa0-c4ab5fdb8504',
    name: '1D',
    state: 'available'
  },
  {
    id: '42e1cee1-97dc-4865-a180-a96ff76c03f6',
    name: '2D',
    state: 'occupied'
  },
  {
    id: 'c6d85d11-a56f-465b-ac45-aa58ef9dfe0f',
    name: '3D',
    state: 'occupied'
  },
  {
    id: '430e1acb-a1e0-4d4c-899a-8482764a0f88',
    name: '4D',
    state: 'occupied'
  },
  {
    id: 'f4a578bb-6a71-4125-9538-7bedea78d5d1',
    name: '5D',
    state: 'occupied'
  },
  {
    id: 'a55cb36c-1f39-415c-bb84-16200a653582',
    name: '6D',
    state: 'available'
  },
  {
    id: '76eab74f-e6df-4e13-b89f-9f782c9aeb77',
    name: '7D',
    state: 'available'
  },
  {
    id: '077e9c3b-d7de-4dd0-abb8-a6f815223452',
    name: '8D',
    state: 'occupied'
  },
  {
    id: '02b70b06-a5b6-4156-b874-19b4d0f17388',
    name: '9D',
    state: 'occupied'
  },
  {
    id: '32de2f61-b606-47df-9a1e-5848cd7ba743',
    name: '10D',
    state: 'occupied'
  },
  {
    id: 'cdb5b312-2919-443c-9de5-969ed312cd49',
    name: '11D',
    state: 'occupied'
  },


  {
    id: 'f50e2541-1ba9-43a8-7aad-c4ab5fdb8504',
    name: '1E',
    state: 'occupied'
  },
  {
    id: '42eccee1-9ddc-4865-a180-a96ff76c03f6',
    name: '2E',
    state: 'occupied'
  },
  {
    id: 'c6d85d19-a56f-465b-ac40-aa58ef9dfe0f',
    name: '3E',
    state: 'available'
  },
  {
    id: '430e1acb-abe0-404c-899a-0482764a0f88',
    name: '4E',
    state: 'available'
  },
  {
    id: 'f42578bb-6a71-4125-9538-1bedea78d5d1',
    name: '5E',
    state: 'occupied'
  },
  {
    id: 'a55cb36c-1f39-f35c-bb84-16200a653582',
    name: '6E',
    state: 'occupied'
  },
  {
    id: '72eab74f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7E',
    state: 'occupied'
  },
  {
    id: 'c77e9c3b-d7de-4d00-abb8-a6f815223452',
    name: '8E',
    state: 'occupied'
  },
  {
    id: '32b70b06-a5b6-4156-b874-19b4d0f17388',
    name: '9E',
    state: 'occupied'
  },
  {
    id: '32de2f61-b606-47df-991e-f848cd7ba743',
    name: '10E',
    state: 'occupied'
  },
  {
    id: 'cdb5d312-29d9-443c-9de5-969ed312cd49',
    name: '11E',
    state: 'occupied'
  },


  {
    id: 'f5ae2541-1ba9-43a8-7aad-c4ab5fdb8504',
    name: '1F',
    state: 'available'
  },
  {
    id: '42eccee1-9ddc-4865-0180-a96ff76c03f6',
    name: '2F',
    state: 'available'
  },
  {
    id: 'c6d85d19-a52f-465b-ac40-aa58ef9dfe0f',
    name: '3F',
    state: 'occupied'
  },
  {
    id: '430e1acb-abe0-404c-899a-0482764a0f88',
    name: '4F',
    state: 'occupied'
  },
  {
    id: 'f42578bb-6a71-4125-9533-1bedea78d5d1',
    name: '5F',
    state: 'occupied'
  },
  {
    id: 'a550b36c-1f39-f35c-bb84-16200a653582',
    name: '6F',
    state: 'occupied'
  },
  {
    id: '79eab74f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7F',
    state: 'occupied'
  },
  {
    id: 'c76e9c3b-d7de-4d00-abb8-a6f815223452',
    name: '8F',
    state: 'occupied'
  },
  {
    id: '32b50b06-a5b6-4156-b874-19b4d0f17388',
    name: '9F',
    state: 'occupied'
  },
  {
    id: '37de2f61-b606-47df-991e-f848cd7ba743',
    name: '10F',
    state: 'occupied'
  },
  {
    id: 'cdb50312-29d9-443c-9de5-969ed312cd49',
    name: '11F',
    state: 'occupied'
  },
  
  
  {
    id: 'f5ae2541-1ba9-4318-7aad-c4ab5fdb8504',
    name: '1G',
    state: 'available'
  },
  {
    id: '42eccee1-9ddc-4b65-0180-a96ff76c03f6',
    name: '2G',
    state: 'available'
  },
  {
    id: 'c6d85d19-a527-465b-ac40-aa58ef9dfe0f',
    name: '3G',
    state: 'occupied'
  },
  {
    id: '430e1acb-abe0-404c-8993-0482764a0f88',
    name: '4G',
    state: 'occupied'
  },
  {
    id: 'f42578bb-6a71-4125-9533-1bedea78d5d9',
    name: '5G',
    state: 'occupied'
  },
  {
    id: 'a550b36c-af39-f35c-bb84-16200a653582',
    name: '6G',
    state: 'occupied'
  },
  {
    id: '79eab74f-ecd2-4e13-b89f-9f782c9aeb77',
    name: '7G',
    state: 'occupied'
  },
  {
    id: 'c76e9c3b-d7de-4d00-abb8-a0f815223452',
    name: '8G',
    state: 'occupied'
  },
  {
    id: '32b50b06-a5b6-4156-f874-19b4d0f17388',
    name: '9G',
    state: 'occupied'
  },
  {
    id: '37de2f61-b606-47df-091e-f848cd7ba743',
    name: '10G',
    state: 'occupied'
  },
  {
    id: 'cdb50312-29d9-443c-9de5-969ed212cd49',
    name: '11G',
    state: 'occupied'
  },


  {
    id: 'f5ae2a41-1ba9-43a8-7aad-c4ab5fdb8504',
    name: '1H',
    state: 'occupied'
  },
  {
    id: '42ecced1-9ddc-4865-0180-a96ff76c03f6',
    name: '2H',
    state: 'occupied'
  },
  {
    id: 'c6d85d19-a56f-465b-ac40-aa58ef9dfe0f',
    name: '3H',
    state: 'occupied'
  },
  {
    id: '430e1acb-abe0-404c-895a-0482764a0f88',
    name: '4H',
    state: 'occupied'
  },
  {
    id: '742578bb-6a71-4125-9533-1bedea78d5d1',
    name: '5H',
    state: 'occupied'
  },
  {
    id: '6550b36c-1f39-f35c-bb84-16200a653582',
    name: '6H',
    state: 'occupied'
  },
  {
    id: '79eab34f-e6d2-4e13-b89f-9f782c9aeb77',
    name: '7H',
    state: 'occupied'
  },
  {
    id: 'c76e9c3b-d7de-4d00-abb4-a6f815223452',
    name: '8H',
    state: 'occupied'
  },
  {
    id: '32b50b06-a5b6-4156-b874-19b4d0f17388',
    name: '9H',
    state: 'occupied'
  },
  {
    id: '37de2f61-b601-47df-991e-f848cd7ba743',
    name: '10H',
    state: 'occupied'
  },
  {
    id: 'cdb50312-27d9-443c-9de5-969ed312cd49',
    name: '11H',
    state: 'available'
  },

  {
    id: 'f5ae2541-dba9-43a8-7aad-c4ab5fdb8504',
    name: '1I',
    state: 'occupied'
  },
  {
    id: '42eccee1-cddc-4865-0180-a96ff76c03f6',
    name: '2I',
    state: 'occupied'
  },
  {
    id: 'c6d85d19-a52f-465b-ac40-aac8ef9dfe0f',
    name: '3I',
    state: 'occupied'
  },
  {
    id: '438e1acb-abe0-404c-899a-0482764a0f88',
    name: '4I',
    state: 'occupied'
  },
]

export async function getSeats({ eventId, scheduleId, hourId }) {
  return SEATS
}