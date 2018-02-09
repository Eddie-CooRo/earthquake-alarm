export default `
    type Query{
        getDevices: String
    }

    """
    push: Push content to users specified by target
    """
    type Mutation {
        login(username:String!,password:String!): Token
        pushBySegment(content:ContentInput target:SegmentTargetInput): PushResult
        pushByFilter(content:ContentInput target:FilterTargetInput): PushResult
        pushToAll(content:ContentInput): PushResult
    }

    type Token{
        token: String!
    }

    type PushResult{
        code: String!
        success: Boolean!
    }

    input FilterTargetInput {
        conditions: [Filter]
    }

    input SegmentTargetInput {
        includedSegments: [ID]
        excludedSegments: [ID]
    }

    input ContentInput{
        title: String
        message: String
        data: [Data]
    }

    input Data {
        key: String!
        value: String!
    }

    input Filter {
        type: FilterType!
        relation: FilterRelationType!
        value: String!
    }

    enum FilterType {
        TAG
        LANGUAGE
        LOCATION
    }

    """
        GT: Greater Than |
        LT: Less Than |
        EQ: Equals
    """
    enum FilterRelationType {
        GT
        LT
        EQ
    }
`;
