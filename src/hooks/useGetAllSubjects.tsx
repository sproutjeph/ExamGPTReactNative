import {axiosInstance} from '@utils/axiosInstance';
import {useQuery} from '@tanstack/react-query';
import {queryKeys} from '@utils/constants';
import {ISubject} from '@utils/types';

interface IAxiosReturnType {
  message: string;
  data: ISubject[];
}

async function getAllSubjects(): Promise<IAxiosReturnType> {
  const {data} = await axiosInstance.get('/get-all-subjects');

  return data;
}

export function useGetAllSubjects() {
  const {
    data: subjects,
    isLoading,
    error,
    isSuccess,
  } = useQuery([queryKeys.allSubjects], () => getAllSubjects());

  return {subjects, isLoading, error, isSuccess};
}
