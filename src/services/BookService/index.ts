import { BaseService } from '../base.service'
interface TypeParams {
  query: string
  maxResult?: number
  page?: number
}
export class BooksService extends BaseService {
  listBooks ({ query, page, maxResult = 10 }: TypeParams): Promise<any> {
    return super.get('', {
      params: { q: query, _startIndex: page, _maxResults: maxResult }
    })
  }
}
