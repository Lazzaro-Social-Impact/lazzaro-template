import { getNFTUrl } from '../../../api/getApiServices';
import useFetch from '../../useDependant';
import useOngConfig from '../useOngConfig';

const useNFT = () => {
  const { ongId, isError: isConfigError, isLoading: isConfigLoading, error: configError } = useOngConfig();
  const { data: nft, isLoading, isError, error } = useFetch<NFT>(getNFTUrl(ongId || ''), ['ong-nft'], !!ongId);

  return {
    attributes: nft?.NFTAttributes,
    id: nft?.id,
    name: nft?.name,
    description: nft?.description,
    status: nft?.status,
    externalUrl: nft?.external_url,
    imageUrl: nft?.s3_image_url,
    minDonationAmount: nft?.min_donation_amount,
    maxMintingQuantity: nft?.max_minting_quantity,
    ipfsImageHash: nft?.ipfs_image_hash,
    ipfsMetadataHash: nft?.ipfs_metadata_hash,
    contractAddress: nft?.contract_address,
    ongId,

    isError: isConfigError || isError,
    isLoading: isConfigLoading || isLoading,
    error: configError || error,
  };
};

export default useNFT;
