<?php
/**
 * Created by PhpStorm.
 * User: Сергей
 * Date: 27.05.2017
 * Time: 15:06
 */

namespace AppBundle\Admin\Consultant;


use AppBundle\Model\IssueQuery;
use Creonit\AdminBundle\Component\Request\ComponentRequest;
use Creonit\AdminBundle\Component\Response\ComponentResponse;
use Creonit\AdminBundle\Component\Scope\Scope;
use Creonit\AdminBundle\Component\TableComponent;

class IssueTable extends TableComponent
{

    /**
     * @header
     * {{ button('Добавить') | open('IssueEditor') }}
     *
     * @columns ID, Вопрос, Ответ, .
     *
     * \Issue
     *
     * @col {{ id }}
     * @col {{ question | open('IssueEditor', {key: _key}) }}
     * @col {{ answer | raw }}
     * @col {{ _delete() }}
     *
     *
     */
    public function schema()
    {
    }

    /**
     * @param ComponentRequest $request
     * @param ComponentResponse $response
     * @param IssueQuery $query
     * @param Scope $scope
     * @param $relation
     * @param $relationValue
     * @param $level
     */
    protected function filter(ComponentRequest $request, ComponentResponse $response, $query, Scope $scope, $relation, $relationValue, $level)
    {
        $query->orderByQuestion();
    }


}