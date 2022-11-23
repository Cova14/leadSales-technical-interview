import React, { useCallback, useContext, useState } from 'react';

export interface DataType {
  phone: string;
  name: string;
  value: string;
  earned: string;
  mail?: string;
  labels?: string;
  company?: string;
  created: string;
  createdAt: Date;
  firstMessageDate: Date;
  firstMessageHour: string;
  firstMessage: string;
  lastMessageDate: Date;
  lastMessageHour: string;
  lastMessage: string;
  status: string;
  leadStatus: string;
  assignedTo: string;
  embudo: string;
  stage: string;
  archived: string;
  manuallyCreated: boolean;
}

export interface DataContextType {
  data: DataType[];
  readFile(event: React.ChangeEvent<HTMLInputElement>): void;
}

const headers = ['phone', 'name', 'value', 'earned', 'mail', 'labels', 'company', 'created', 'createdAt', 'firstMessageDate', 'firstMessageHour', 'firstMessage', 'lastMessageDate', 'lastMessageHour', 'lastMessage', 'status', 'leadStatus', 'assignedTo', 'embudo', 'stage', 'archived', 'manuallyCreated'];

const DataContext = React.createContext<DataContextType>(undefined!);

export const DataContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [data, setData] = useState<DataType[]>([]);

  const readFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof reader.result !== 'string') {
        throw new Error('Invalid file!');
      }
      const csv: string = reader.result;
      const allTextLines = csv.split(/\r|\n|\r/);
      const lines: DataType[] = [];

      for (let i = 1; i < allTextLines.length; i++) {
        const obj: any = {};
        const currentline = allTextLines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        lines.push(obj);
      }
      setData(lines);
    };

    if (!event.target.files) {
      throw new Error('Invalid file!');
    }
    reader.readAsText(event.target.files[0]);
  }, []);

  return (
    <DataContext.Provider value={{ data, readFile }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const value = useContext(DataContext);

  return value;
};

export default useData;