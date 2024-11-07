import styled from '@emotion/styled';

export const MoviesDetailsWrapper = styled.section`
    display: flex;
    
    img {
        max-width: 300px;
    }
    
    .description {
        margin-left: 20px;
    }
    
    .genres {
        display: flex;
        
        li + li {
            margin-left: 10px;
        }
    }
`;


export const MovieAdditionalDetails = styled.section`
ul {
	li + li {
		margin-top: 15px;
	}
}
`