import {useState} from 'react';
interface Props {
   boundaryCount?: number;
   count: number;
   onChange?: (e: any) => void;
   page?: any;
   siblingCount?: number;
}
export default function usePagination2(props: Props) {
   const {
      boundaryCount = 1,
      count = 1,
      onChange: handleChange,
      page: pageProp,
      siblingCount = 1,
   } = props;

   const [page, setPage] = useState(pageProp);

   const handleClick = value => {
      setPage(value);
      if (handleChange) {
         handleChange(value);
      }
   };
   const range = (start, end) => {
      const length = end - start + 1;
      return Array.from({length}, (_, i) => start + i);
   };

   const startPages = range(1, Math.min(boundaryCount, count));
   const endPages = range(
      Math.max(count - boundaryCount + 1, boundaryCount + 1),
      count
   );

   const siblingsStart = Math.max(
      Math.min(
         page - siblingCount,
         count - boundaryCount - siblingCount * 2 - 1
      ),
      boundaryCount + 2
   );

   const siblingsEnd = Math.min(
      Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : count - 1
   );
   let itemList = [
      ...startPages,
      ...range(siblingsStart, siblingsEnd),
      ...endPages,
   ];
   function previous() {
      return page > 1 && handleClick(page - 1);
   }
   function next() {
      return count > page && handleClick(page + 1);
   }
   function getList(item) {
      return {
         onClick: _ => {
            handleClick(item);
         },
         page: item,
         selected: item === page,
      };
   }
   itemList.unshift(1);
   itemList.push(count);
   const items = itemList.map(item => getList(item));
   return {
      items,
      previous,
      disabled: page >= count || page <= 1,
      next,
   };
}
