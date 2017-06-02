<?php

namespace Tests\Unit\Models;

use App\Models\ModuleListFilter;
use Illuminate\Database\Eloquent\Builder;
use Tests\TestCase;

class ModuleFilterTest extends TestCase
{
    /**
     * Ensures that calls to ::filter() adds the right clauses to the query.
     *
     * @param Builder $modules
     * @param array $filters
     * @dataProvider filterCases
     **/
    public function testFilter($modules, $filters)
    {
        $objectUnderTest = new ModuleListFilter();
        $objectUnderTest->filter($modules, $filters);
    }

    /**
     * Assembles cases from private methods on this instance.
     *
     * Note that if adding a case, be sure to update the call to `range()` or it will not be executed.
     * @return array
     **/
    public function filterCases()
    {
        return array_map(function($caseNumber) {
            $modules = $this->getMockBuilder(Builder::class)
                ->setMethods(array('where', 'whereIn'))
                ->disableOriginalConstructor()
                ->disableOriginalClone()
                ->getMock();
            return call_user_func(array($this, sprintf("filterCase%'.02d", $caseNumber)), $modules);
        }, range(0, 4));
    }

    /**
     * When the `minLevel` parameter is used, its clause is set.
     *
     * @param \PHPUnit_Framework_MockObject_MockObject $modules
     * @return array
     **/
    private function filterCase00($modules)
    {
        $modules->expects($this->never())->method('whereIn');
        $modules->expects($this->once())
            ->method('where')
            ->with($this->equalTo('min_level'), $this->equalTo('>='), $this->equalTo('2'));
        return array($modules, array('minLevel' => '2'));
    }

    /**
     * When the `maxLevel` parameter is used, its clause is set.
     *
     * @param \PHPUnit_Framework_MockObject_MockObject $modules
     * @return array
     **/
    private function filterCase01($modules)
    {
        $modules->expects($this->never())->method('whereIn');
        $modules->expects($this->once())
            ->method('where')
            ->with($this->equalTo('max_level'), $this->equalTo('<='), $this->equalTo('4'));
        return array($modules, array('maxLevel' => '4'));
    }

    /**
     * When the `setting` parameter is used, its clause is set.
     *
     * @param \PHPUnit_Framework_MockObject_MockObject $modules
     * @return array
     **/
    private function filterCase02($modules)
    {
        $modules->expects($this->never())->method('whereIn');
        $modules->expects($this->once())
            ->method('where')
            ->with($this->equalTo('setting_id'), $this->equalTo('settingId'));
        return array($modules, array('setting' => 'settingId'));
    }

    /**
     * When the `editions` parameter is used, its clause is set.
     *
     * @param \PHPUnit_Framework_MockObject_MockObject $modules
     * @return array
     **/
    private function filterCase03($modules)
    {
        $modules->expects($this->never())->method('where');
        $modules->expects($this->once())
            ->method('whereIn')
            ->with($this->equalTo('edition_id'), $this->equalTo(array('id1', 'id2')));
        return array($modules, array('editions' => array('id1', 'id2')));
    }

    /**
     * When the `moduleLengths` parameter is used, its clause is set.
     *
     * @param \PHPUnit_Framework_MockObject_MockObject $modules
     * @return array
     **/
    private function filterCase04($modules)
    {
        $modules->expects($this->never())->method('where');
        $modules->expects($this->once())
            ->method('whereIn')
            ->with($this->equalTo('length_id'), $this->equalTo(array('lengthid1')));
        return array($modules, array('moduleLengths' => array('lengthid1')));
    }
}
